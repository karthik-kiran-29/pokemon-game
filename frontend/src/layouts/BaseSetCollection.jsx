import React from "react";
import BaseSetCard from "../components/BaseSetCard";

const BaseSetCollection = ()=>{
    const SampleInput = [{
        "_id": "base1",
        "name": "Base",
        "series": "Base",
        "printedTotal": 102,
        "total": 102,
        "legalities": {
          "unlimited": "Legal"
        },
        "ptcgoCode": "BS",
        "releaseDate": "1999/01/09",
        "updatedAt": "2022/10/10 15:12:00",
        "images": {
          "symbol": "https://images.pokemontcg.io/base1/symbol.png",
          "logo": "https://images.pokemontcg.io/base1/logo.png"
        }
      }]

      return(
        <>
          <div>This is Base Set Collection.</div>
          {
           SampleInput.map((card)=>{
            return <BaseSetCard {...card}/>
           })
          }
        </>
      )
}

export default BaseSetCollection;