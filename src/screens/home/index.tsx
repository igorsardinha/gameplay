import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";

import { CategorySelect } from "../../components/CategorySelect";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";


import { styles } from "./style";

export function Home() {
    const [category, setCategory] = useState('');
    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'TrCraft',
                icon: null,
                owner: false
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'É um teste isso aqui!'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'SgCraft',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'É um teste isso aqui!'
        },
        {
            id: '4',
            guild: {
                id: '1',
                name: 'SgCraft',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'É um teste isso aqui!'
        },
        {
            id: '5',
            guild: {
                id: '1',
                name: 'SgCraft',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'É um teste isso aqui!'
        },
        {
            id: '6',
            guild: {
                id: '1',
                name: 'SgCraft',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'É um teste isso aqui!'
        },
        {
            id: '7',
            guild: {
                id: '1',
                name: 'SgCraft',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'É um teste isso aqui!'
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return (
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
            <CategorySelect
                categorySelect={category}
                setCategory={handleCategorySelect}
            />
            <View style={styles.content}>
                <ListHeader
                    title="Partidas Agendadas"
                    subtitle="Total 6"
                />
                <FlatList
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Appointment data={item} />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                />

            </View>
        </View>

    );
}