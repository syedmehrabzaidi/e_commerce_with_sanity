import { defineField } from "sanity";

// sanity/pet.ts
export const product = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'title',
            title: 'Procduct Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Procduct Description',
            type: 'string'
        },
        {
            name: 'price',
            title: 'Procduct Price',
            type: 'number'
        },
        {
            name: 'image',
            title: 'Procduct Image',
            type: 'image'
        },
        defineField({
            name: 'category',
            title: 'Procduct Category',
            type: 'reference',
            to:[
                {
                    type: "category"
                }
            ]
            })
    ]
}