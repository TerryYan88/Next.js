import { sanityClient, urlFor, usePreviewSubscription, PortableText } from "../../lib/sanity";
import { GetStaticPaths,GetStaticProps } from "next";

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
        unit,
        wholeNumber,
        fraction,
        ingredient->{
            name,
        }
    },
    instructions
  }`

  interface OneRecipeProps{
      data:{

      }
  }

const OneRecipe = (props:OneRecipeProps) => {
 
    return (
        <div></div>
    )
}

//getStaticPaths pre-render static at build time;have to get dynamic params
//it should be used in dynamic router
//fallback false getStaticProps get nothing from it,and it will return 404
//fallback true, it will pre-render page at build time
export const getStaticPaths: GetStaticPaths = async (ctx):Promise<any> => {
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
        fallback:true,
    }
}
interface getStatic{
    "params":{
        "slug":string
    }
}

export const getStaticProps = async (props:getStatic)=>{
    const {params:{slug}} = props
    const recipe = await sanityClient.fetch(recipeQuery,{slug})
    console.log(slug);
    return{
        props:{
            data:{
                recipe
            }
        }
    }
}




export default OneRecipe;