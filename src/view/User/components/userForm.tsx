import {Col, Form, Row, useFormState} from "@douyinfe/semi-ui";
import {useRef} from "react";


const useUserForm = () => {

    const formRef: any = useRef({})
    const getFormState = () => {
        return formRef.current.formApi.getFormState().values
    }

    const userForm = () => {

        const render = ({formState, values, formApi}:any) => {
            return (
                <>
                    <Form.Input field='name' label='名字' style={{width: '100%'}}/>
                    <Form.Input field='age' label='年龄' style={{width: '100%'}}/>
                    <Form.Input field='phone' label='手机号' style={{width: '100%'}}/>
                    <Form.Input field='email' label='邮箱' style={{width: '100%'}}/>
                    <Form.Input field='address' label='地址' style={{width: '100%'}}/>
                </>
            )
        }
        return (
            <Form
                ref={formRef}
                render={render}
                onValueChange={values => console.log(values)}>
            </Form>
        );
    }
    return {
        userForm,
        formRef,
        getFormState
    }
}


export default useUserForm