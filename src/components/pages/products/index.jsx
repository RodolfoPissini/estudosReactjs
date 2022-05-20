import { useContext, useEffect, useRef, useState } from 'react';
import {Container, 
  TitleDescription,
  ProductLeftDescription,
  Description,
  ProductRightDescription,
  Title,
  UpArrow,
  Up,
  HorizontalRow
} from './style';
import {PepsiContext} from '../../../context/index';

import raperShirt from '../../../assets/images/camisapepsi4.webp';
import buttonShirt from '../../../assets/images/camisapepsi3.png';
import swearshirt from '../../../assets/images/blusapepsi2.jpg';
import swearshirt2 from '../../../assets/images/blusapepsi1.jpg';
import shirt from '../../../assets/images/pepsicamisa1.jpg';
import trucker from '../../../assets/images/trucker1.webp';
import trucker2 from '../../../assets/images/trucker2.jpg';

export function Products(){
  const {setPepsiColor} = useContext(PepsiContext);

  const productShirt = useRef();
  const productSwearShirt = useRef();
  const productTshirt = useRef();
  const productHat = useRef();

  function handleGoToShirt(){
    productShirt?.current?.scrollIntoView({behavior: 'smooth'});
  }

  function handleGoToSwearShirt(){
    productSwearShirt?.current?.scrollIntoView({behavior: 'smooth'});
  }
  function handleGoToTshirt(){
    productTshirt?.current?.scrollIntoView({behavior: 'smooth'});    
  }
  function handleGoToHat(){
    productHat?.current?.scrollIntoView({behavior: 'smooth'});    
  }

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if(window.scrollY === 0){
      setShowButton(true)
    }else {
      setShowButton(false)
    }
    
  },[showButton])

  function scrollToTop(){
    return window.scrollTo({top:0,left:0, behavior:'smooth'})
  }

  window.addEventListener('scroll',setShowButton)

  useEffect(()=>{
    setPepsiColor('#0062BE')
  },[])

  return(
    <Container>
      <UpArrow visible={showButton} onClick={scrollToTop}>
        <Up/>
      </UpArrow>
      <TitleDescription>
        <h1>Products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto, officiis deleniti harum similique voluptatum quam consectetur dolor necessitatibus distinctio quod eveniet at, eius sed exercitationem, cum iure magnam sequi?</p>
        <span className="links" onClick={handleGoToShirt}>Camisas</span>
        <span className="links" onClick={handleGoToSwearShirt}>Blusas</span>
        <span className="links" onClick={handleGoToTshirt}>Camiseta</span>
        <span className="links" onClick={handleGoToHat}>Bonés</span>
      </TitleDescription>

    <Title ref={productShirt}>Camisas</Title>

      <ProductLeftDescription>
        <img src={raperShirt} alt="" />
        <Description>
          <h1>button shirt</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eaque iste ea dicta veritatis voluptatum itaque et ex inventore non eius, consectetur sapiente quam repudiandae qui tenetur? Commodi, provident harum.</p>
          <button>reserve já</button>
        </Description>
      </ProductLeftDescription>

      <ProductRightDescription>
        <img src={buttonShirt} alt="" />
        <Description>
          <h1>button shirt</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque ratione quisquam. Veniam rerum quo esse, ea nesciunt eum cupiditate distinctio dolores. Quidem quisquam at sit voluptates. Cum, praesentium recusandae!</p>
          <button>reserve já</button>
        </Description>
      </ProductRightDescription>

      <HorizontalRow />

      <Title ref={productSwearShirt}>Blusas</Title>

      <ProductLeftDescription>
        <img src={swearshirt} alt="" />
        <Description>
          <h1>blusa</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quo odit possimus porro modi repudiandae esse rerum explicabo similique, reprehenderit odio atque iusto iste voluptatem, laborum deleniti perspiciatis optio. Earum.</p>

          <button>reserve já</button>
        </Description>
      </ProductLeftDescription>

      <ProductRightDescription>
        <img src={swearshirt2} alt="" />
        <Description>
          <h1>blosa 2</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex libero eum minima eveniet, eligendi maxime mollitia nobis velit neque sequi ratione amet nemo explicabo blanditiis deleniti laudantium numquam quibusdam expedita!</p>

          <button>reserve ja</button>
        </Description>
      </ProductRightDescription>

      <HorizontalRow />

      <Title ref={productTshirt}>Camisetas</Title>

      <ProductLeftDescription>
        <img src={shirt} alt="" />
        <Description>
          <h1>camisa</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quibusdam vel rerum expedita ipsum fuga veritatis ullam sunt dolore iure quaerat eligendi veniam, mollitia consectetur adipisci! Aspernatur vitae perspiciatis expedita?</p>

          <button>reserve já</button>
        </Description>
      </ProductLeftDescription>

      <HorizontalRow />

      <Title ref={productHat}>Bonés</Title>

      <ProductRightDescription>
        <img src={trucker} alt="" />
        <Description>
          <h1>trucker</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nesciunt placeat earum facilis consequatur saepe quas sunt nihil assumenda. Obcaecati dolorem ducimus ab odio hic sint dolores modi error laborum.</p>

          <button>reserve já</button>
        </Description>
      </ProductRightDescription>

      <ProductLeftDescription>
        <img src={trucker2} alt="" />

        <Description>
          <h1>trucker</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur earum fuga esse harum? Sed iste et maxime ipsa nobis? Sint, aut? Nihil at sapiente earum impedit aut labore nobis debitis!</p>

          <button>reserve já</button>
        </Description>
      </ProductLeftDescription>
    </Container>
  )
}