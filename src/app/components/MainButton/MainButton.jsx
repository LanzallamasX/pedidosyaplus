import styles from './MainButton.module.css'; 

const MainButton = ({ textButton }) => {

  return (  
    <>
    <button className={`bg-red hover:bg-[#DE0047] rounded-[10px] font-40 textaBlack py-3 px-10 md:py-5 md:px-20 text-white ${styles.gradientBg}`}>
          { textButton }        
    </button>
    </>
  );
}


export default MainButton;
