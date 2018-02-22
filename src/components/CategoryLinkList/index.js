import React from 'react';
import './index.css';

const extractCategories = posts => {

  let buildingCategoriesList = [];
  posts.map(post => {

    buildingCategoriesList = [...buildingCategoriesList,...post.categories]
    return false
  })

  return [...new Set(buildingCategoriesList)]
}

const categoriesWithTotals = (itemList) => {
  const uniqueItemsList = extractCategories(itemList);
  const TotaledPosts = uniqueItemsList.map(item => {
    return {
      name: item,
      count: 0
    }
  });

  itemList.map(item => {

    item.categories.map(category => {
      const matchedIndex = uniqueItemsList.indexOf(category);
      if(matchedIndex !== -1){
        TotaledPosts[matchedIndex].count++
      }
      return false
    })

    return false
  })

  return TotaledPosts
}

const CategoryLinkList = props =>
  <nav className={`CategoryLinkList ${props.className}`}>
    {props.title && <h5 className='title'>{props.title}</h5>}

    {categoriesWithTotals(props.posts) &&
    categoriesWithTotals(props.posts)
    .sort((a,b) => a.name > b.name)
    .map((item,index) =>
      <div key={index}>
        <a href={`/${item.name}`}>
          <span>{item.name}</span>
        </a>
        <span className='counter'>{item.count}</span>
      </div>)}
  </nav>

export default CategoryLinkList;
