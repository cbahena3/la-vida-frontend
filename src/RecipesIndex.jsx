/* eslint-disable react/prop-types */
import { Card, Col, Row, Button, Flex } from 'antd';

const { Meta } = Card;


export function RecipesIndex(props){

  // console.log(props.recipe.name)
  return(
    <div>   
      <h1>All Recipes</h1>
      {props.recipes.map((recipe)=>(
        <div key={recipe.id}>
          <Row gutter={16}>
            <Col span={8}>
              <Card
                hoverable
                style={{
                  width: 500,
                }}
                cover={<img alt={recipe.name} src={recipe.image} onClick={()=>props.displayRecipe(recipe)} />}
              >
                <Meta title={recipe.name}/>
                <br />
                {recipe.description}
                <br />
                Time: {recipe.time} <br />
                Servings: {recipe.servings}
                
              </Card>
            </Col>
          </Row>
          <br />
        </div>
      ))}
    </div>
  )
}
