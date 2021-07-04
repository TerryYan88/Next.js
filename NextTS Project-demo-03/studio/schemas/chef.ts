export const chef =  {
    name:"chef",
    title:"Chef",
    type:"document",
    fields:[
        {
            name:"name",
            title:"Chef's Name",
            type:"string",
        },
        {
            name:"image",
            title:"Image",
            type:"image",
            options:{
                hotspot:true,
            }
        },
        {
            name:"bio",
            title:"Bio",
            type:"array",
            of:[
            {
                name:"bio",
                title:"Bio",
                type:"string",               
            }
                // {
                //     title:"Block",
                //     type:"block",
                //     styles:[{title:"Normal",value:"normal"}],
                //     lists:[]
                // }
            ]
        }
    ],

}