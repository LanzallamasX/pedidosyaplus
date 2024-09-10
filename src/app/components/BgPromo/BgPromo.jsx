import styles from './BgPromo.module.css'; 


const BgPromo = ({children}) => {

  return (

    <>
    <div className={`${styles.bgPromo} font-20`}>

        {children}

    </div>
    </>
  );
}


export default BgPromo;
