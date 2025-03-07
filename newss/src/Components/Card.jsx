import React from 'react'

const Card = ({ data }) => {
  console.log(data);
  if (!Array.isArray(data)) {
    return <div>clique</div>;
  }

  return (
    <div className='cardContainer'>
      {data.map((curItem, index) => {
        const maxTitleLength = 30;
        const maxDescriptionLength = 100;

        // Verifica se title e description existem antes de acessar length
        const truncatedTitle = curItem?.title
          ? (curItem.title.length > maxTitleLength
            ? curItem.title.slice(0, maxTitleLength) + "..."
            : curItem.title)
          : "Sem título";

        const truncatedDescription = curItem?.description
          ? (curItem.description.length > maxDescriptionLength
            ? curItem.description.slice(0, maxDescriptionLength) + "..."
            : curItem.description)
          : "Sem descrição";

        return (
          <div key={index} className='card'>
            <img />
            <div className='cardContent'>
              <a>{truncatedTitle}</a>
              <p>{truncatedDescription}</p>
              <button>Leia Mais</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
