/* eslint-disable react/prop-types */
import { Carousel, Col, Row, Card } from 'antd';
export function Home (props) {
  const contentStyle = {
    height: '70%',
    position: 'relative',
    color: 'white',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    width: '70%',
    margin: 'auto',
  };
  
  const threeRecipes = props.recipes.slice(0,3);
  const firstRecipe = threeRecipes[0];
  const secondRecipe = threeRecipes[1];
  const thirdRecipe = threeRecipes[2];

  return(
    <div>
      <h1>Welcome To La Vida</h1>
      <div>
      <Carousel autoplay fade>
        <div>
          <p style={contentStyle}> <img src={firstRecipe?.image}  style={{width: '70%'}}/></p>
          <h2 style={contentStyle}>{firstRecipe?.name}</h2>
          <h5 style={contentStyle}>{firstRecipe?.description}</h5>
        </div>
        <div>
          <p style={contentStyle}><img src={secondRecipe?.image} style={{width: '70%'}}/></p>
          <h2 style={contentStyle}>{secondRecipe?.name}</h2>
          <h5 style={contentStyle}>{secondRecipe?.description}</h5>
        </div>
        <div>
          <p style={contentStyle}><img src={thirdRecipe?.image} style={{width: '70%'}}/></p>
          <h2 style={contentStyle}>{thirdRecipe?.name}</h2>
          <h5 style={contentStyle}>{thirdRecipe?.description}</h5>
        </div>
      </Carousel>
      </div>
      <div>
        <h2>Cooking at home versus eating out offers numerous advantages, including:</h2>
        <div>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Healthier Options:" bordered={false}>
              When you cook at home, you have control over the ingredients, portion sizes, and cooking methods. This allows you to choose healthier options and control your calorie intake.
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Improves Cooking Skills:" bordered={false}>
              Provides an opportunity to hone your culinary skills and experiment with different recipes and cooking techniques. Over time, you become more proficient, which can be both rewarding and enjoyable.
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Cost-Effective:" bordered={false}>
              Eating out regularly can be expensive, especially if you dine at restaurants frequently. Cooking at home is generally more cost-effective since you can take advantage of sales and discounts.
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Customization:" bordered={false}>
              Allows you to customize meals according to your preferences, dietary restrictions, and nutritional needs. You can adjust recipes to suit your taste, substitute ingredients, and accommodate any food sensitivities.
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Quality Time:" bordered={false}>
              Can be a social activity, allowing you to spend quality time with family and friends while preparing meals together. It offers an opportunity to bond, share stories, and create lasting memories.
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Portion Control:" bordered={false}>
              Restaurants often serve oversized portions. Cooking at home allows you to control portion sizes, helping you maintain a healthy weight and avoid unnecessary calorie consumption.
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Reduced Environmental Impact:" bordered={false}>
              Generates less waste compared to eating out, where single-use containers and packaging are often used. It also allows you to make more environmentally friendly choices, such as buying locally sourced ingredients or reducing food waste by using leftovers creatively.
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Enhanced Food Safety:" bordered={false}>
              You can ensure that food is handled and prepared safely, reducing the risk of foodborne illnesses. You can follow proper food safety guidelines, such as washing hands, sanitizing surfaces, and cooking foods to the appropriate temperatures.
              </Card>
            </Col>
          </Row>
        </div>
        {/* <div>
          <h3>Summary </h3>
          <iframe title="YouTube video"src="https://www.youtube.com/embed/17a7Wcgf-aU?si=RPeJK0kjvL2MF6Ml?autoplay=1" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <p>Cooking at home presents a multitude of advantages over dining out, including improved health outcomes due to greater control over ingredients and portion sizes, resulting in healthier meals. It is also more cost-effective, allowing individuals to save money by purchasing ingredients in bulk and avoiding the markup of restaurant prices. Moreover, cooking at home fosters the development of culinary skills and provides opportunities for social interaction with family and friends during meal preparation. Additionally, it reduces environmental impact through decreased waste and offers greater control over portion sizes, aiding in weight management. Lastly, cooking at home ensures food safety by adhering to proper handling and cooking practices, ultimately contributing to overall well-being and satisfaction.</p>
        </div> */}
      </div>
    </div>
  )
}