import { useState } from 'react';

export const useForm = ( inicialForm = {} ) => {

    const [formState, setFormState] = useState( inicialForm );

    const onResetForm = () => {

        setFormState(inicialForm)
    }


    const onInputChange = ({ target }) => {
        const { value, name } = target;

        setFormState({
            ...formState,
            [name]: value
        });
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
