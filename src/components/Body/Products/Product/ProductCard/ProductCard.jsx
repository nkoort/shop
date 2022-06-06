import s from './ProductCard.module.scss';
import { NavLink, useMatch } from 'react-router-dom';
import ButtonAddContainer from '../../buttonAdd/buttonAddContainer';
import classNames from 'classnames/bind';
import editPng from '../../../../../assets/img/edit.png';


let cx = classNames.bind(s);

const ProductCard = ({ product }) => {
   let match = useMatch('/product-list/product/:idProduct');

   const descrProduct = () => {
      return (
         Object.keys(product).map(k1 => {
            let descrList = Object.keys(product[k1]).map((k2) => {
               return (
                  <div key={k2} className={cx(['infoLine', k2 + 'Line'])}>
                     <div className={s.lineName}>{k2}</div>
                     <div className={s.lineValue}>{product[k1][k2]}</div>
                  </div>
               )
            })
            return (
               <div key={k1} className={cx([{ main: k1 === 'main', other: k1 === 'info' }])}>
                  <div className={cx(['blockName'])}>
                     {k1 == 'main' ? 'Основания информация' : 'Дополнительня информация'}
                  </div>
                  <div className={cx([{ main: k1 === 'main', other: k1 === 'info' }])}>
                     {descrList}
                  </div>

               </div>
            )
         })
      )
   }



   return (
      <div className={s.productItem}>
         <div className={s.name}>
            {match && <div> {product.main.name} </div>}
            {match && <div className={s.edit}><NavLink to={'/editproduct/' + product.main.id}><img src={editPng} /></NavLink></div>}
            {!match && <NavLink to={'product/' + product.main.id}> {product.main.name} </NavLink>}
         </div>
         <div className={s.block}>
            {descrProduct()}
         </div>
         <div>
            <ButtonAddContainer product={product.main} />
         </div>
      </div>
   )
};

export default ProductCard;

