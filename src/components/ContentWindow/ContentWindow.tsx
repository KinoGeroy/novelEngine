import style from './ContentWindow.module.scss';
import WindowsTemplate from "./WindowsTemplate/WindowsTemplate.tsx";

//all lvls connection
import lvl1 from '../../mapLvl/lvl.json';

//

const ContentWindow = () => {
    console.log(lvl1);
    return (
        <div className={style.ContentWindow}>
            <WindowsTemplate jsonData={lvl1}/>
        </div>
    );
};

export default ContentWindow;
