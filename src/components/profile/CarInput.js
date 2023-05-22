import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import toast from "react-hot-toast";
import {updateCar} from "../../reducers/carSlice";

function CarInput (props) {
    const carId = useSelector(state => state.car.id)

    const [isEdit, setIsEdit] = useState(false)
    const [value, setValue] = useState(props.value)
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };
    const toggleEdit = () => {setIsEdit(!isEdit)}

    const onChange = (e) => setValue(e.target.value)

    const dispatch = useDispatch()

    const save = async e => {
        e.preventDefault()

        if (value.length < 4) {
            toast.error(`Вы ввели слишком короткое ${String(props.label).toLocaleLowerCase()}`)
            return
        }

        const data = {
            [props.id]: `${value}`,
            id: carId
        }
        if (props.type==='file') {
            const formData = new FormData();
            formData.append([props.id], image);
            await dispatch(updateCar({formData, id: carId}))
        } else {
            await dispatch(updateCar(data))
        }
        toggleEdit()
    }

    return (
        <>
        {isEdit ?
        <form className={'car form form_row'} onSubmit={save}>
            <div className="form__body">
                <label className={'form__label'} htmlFor={props.id}>{props.label}:</label>
                {props.type !== 'file' ? <input
                    className={'form__input'}
                    placeholder={props.placeholder}
                    type={props.type} id={props.id}
                    value={value}
                    onChange={onChange}
                /> :
                <input
                    type={'file'}
                    accept="image/jpeg,image/png,image/gif"
                    onChange={handleImageChange}
                />}
            </div>
            <div className="form__footer">
                <input className={'form__input form__input_submit'} type={'submit'}/>
            </div>
        </form> :
        <div className={'userProfile__row form form_row'}>
            <p className={'row__about'}>{props.label}: {value}</p>
            <button className={'form__input form__input_edit'} onClick={toggleEdit}>Изменить</button>
        </div>}
        </>
    );
}

export default CarInput;