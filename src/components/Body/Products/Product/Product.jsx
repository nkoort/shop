import {NavLink, useMatch} from 'react-router-dom';
import s from './Product.module.css';


const Product = (props) => {
   let match = useMatch('/product-list/product/:prodId');

   if (!props.product) {
      return (<div> Loading.... </div>)
   } else {
      let logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxwSGGfwg7rhSagWK4LfDiAqhLq70ljOTKzg&usqp=CAU'
      let name = !props.product.name ? '' : props.product.name
      let category = props.product.category;
      let group = props.product.group;
      let weight = props.product.wigth;
      let price = props.product.price;
      let description = props.product.description;
      let editLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/SVG-edit_logo.svg/2048px-SVG-edit_logo.svg.png';
      return (
         <div className={s.product}>
            <div className={s.logo}>
               <img src={logo} alt="" />
            </div>
            <div className={s.info}>
               <div className={s.nameBlock}>
                  <div className={s.name}>{name}</div>
                  <div className={s.edit}>
                     <NavLink to={'/editproduct/' + match.params.prodId} ><img src={editLogo} alt="" /></NavLink>
                  </div>
               </div>
               <div className={s.local}>
                  <div className={s.category}>{category}</div>
                  <div className={s.group}>{group}</div>
               </div>
               <div className={s.char}>
                  <div className={s.price}>{price}</div>
                  <div className={s.weight}>{weight}</div>
               </div>
               <div className={s.descr}>
                  {description}
               </div>
            </div>
         </div>
      );
   }

};



export default Product;