import style from './styles/App.module.scss';
import MainContainer from "./components/MainInterface/MainContainer.tsx";
import ContentWindow from "./components/ContentWindow/ContentWindow.tsx";
import AdditionalWindow from "./components/AdditionalWindow/AdditionalWindow.tsx";

const App = () => {
    return (
        <div className={style.app}>
            <MainContainer/> {/* MainInterface - левая часть интерфейса - меню, сохранение, дата */}
            <ContentWindow/> {/* ContentWindow - центральная часть интерфейса */}
            <AdditionalWindow/> {/* AdditionalWindow - правая часть - состояния, статы, инвентарь */}
        </div>
    )
}

export default App

//todo 'перевод json' : 'написать навигацию между уровнями, мб router' : 'написать связь между компонентами' : 'переписать типизацию, отказаться от цифр'
