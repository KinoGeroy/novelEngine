import {AppDispatch} from "../../redux/Store.ts";
import {useDispatch} from "react-redux";
import {nextLvl} from "../../redux/SliceLvls.ts";

const LvlLoader = <T>(data: T) => {
    const dispatch: AppDispatch = useDispatch();

    console.log(data);
    return (
        dispatch(nextLvl(data))
    );
};

export default LvlLoader;
