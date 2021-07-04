import { sanityClient, urlFor, usePreviewSubscription, PortableText } from "../../lib/sanity";
import { GetStaticPaths, GetStaticProps } from "next";
import {useState} from "react";

const recipeQuery = `*[_type=="recipe" && slug.current == $slug][0]{
    _id,
    name,
    slug,
    mainImage{
        asset->{
            _id,
            url
        }
    },
    ingredient[]{
        _key,
        unit,
        wholeNumber,
        fraction,
        ingredient->{
            name,
        }
    },
    instructions
  }`

interface OneRecipeProps {
    data: {
        recipe: {
            _id: string,
            name: string,
            slug: string,
            mainImage: string,
            ingredient: {
                _key: string
                unit: string,
                wholeNumber: string,
                fraction: string,
                ingredient: {
                    name: string
                }
            }[],
            instructions: string,
            likes:number,
        }
    }
}

const OneRecipe = (props: OneRecipeProps) => {
    const { data: { recipe } } = props;
    const [likes,setLikes] = useState(recipe?.likes);

    const addLike = async ()=>{
        try{
            const res = await fetch("/api/handle-like",{
                method:"POST",
                body:JSON.stringify({
                    _id:recipe._id
                })
            })
            const data = await res.json();
            setLikes(data.likes)
        }catch(e){
            console.log(e);
        }   
    }

    return (
        <article className="recipe">
            <h1>{recipe.name}</h1>

            <button 
                onClick={addLike} 
                className="like-button"
            >{likes} 💗</button>

            <main className="content">
                <img src={urlFor(recipe?.mainImage).url()} alt={recipe.name} />
                <div className="breakdown">
                    <ul className="ingredients">
                        {
                            recipe.ingredient?.map((ingredient) => {
                                return (
                                    <li key={ingredient._key}
                                        className="ingredient"
                                    >
                                        {ingredient.wholeNumber}
                                        {ingredient.fraction}
                                        {ingredient.unit}
                                        <br />
                                        {ingredient.ingredient.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <PortableText 
                        blocks={recipe?.instructions} 
                        className="instructions"
                    />
                </div>
            </main>
        </article>
    )
}

//getStaticPaths pre-render static at build time;have to get dynamic params
//it should be used in dynamic router
//fallback false getStaticProps get nothing from it,and it will return 404
//fallback true, it will pre-render page at build time
export const getStaticPaths: GetStaticPaths = async (ctx): Promise<any> => {
    const paths = await sanityClient.fetch(
        `*[_type == "recipe" && defined(slug.current)]{
            "params":{
                "slug":slug.current
            }
        }`
    );
    return {
        paths,
        //if fallback is false there are not any return and then go to 404 page
        //If fallback is true, then the behavior of getStaticProps changes:
        fallback: true,
    }
}
interface getStatic {
    "params": {
        "slug": string
    }
}

export const getStaticProps = async (props: getStatic) => {
    const { params: { slug } } = props
    const recipe = await sanityClient.fetch(recipeQuery, { slug })
    console.log(slug);
    return {
        props: {
            data: {
                recipe
            }
        }
    }
}




export default OneRecipe;