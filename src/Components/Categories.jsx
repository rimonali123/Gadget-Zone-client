import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Categories() {

    const [data, setData]=useState('')

    const { register, handleSubmit } = useForm();
    const onSubmit = data => setData(data.product);

    console.log(data)
    return (
        <div>
            <form onChange={handleSubmit(onSubmit)}>

                <select {...register("product")}  className="select select-bordered select-sm w-full max-w-xs">
                    
                    <option value="apple">Small Apple</option>
                    <option value="orange">Small Orange</option>
                    <option value="tomato">Small Tomato</option>
                </select>
                
                
            </form>
        </div>
    )
}
