import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import {nanoid} from 'nanoid'
import { recepiscontext } from '../context/ResepisContext'

const CreateResepis = () => {
  const { data, setdata } = useContext(recepiscontext)
  const { register, handleSubmit, reset } = useForm()

  const SubmitHandler = (recepi) => {
    recepi.id = nanoid();
    
        
    setdata([...data, recepi])
    reset()
  };
  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>

      <input
        className='outline-0 p-2 border-b block'
        {...register("image")}
        type="url"
        placeholder='Enter Image URL'
      />

      <input
        className='outline-0 border-b p-2 block'
        {...register("title")}
        type="text"
        placeholder='Recipe Title'
      />

      <textarea
        className='outline-0 border-b p-2 block'
        {...register("description")}
        placeholder='//Enter Yours description'
      >
      </textarea>

      <textarea
        className='outline-0 border-b p-2 block'
        {...register("ingredient")}
        placeholder='//Ingredients'
      >
      </textarea>

      <textarea
        className='outline-0 border-b p-2 block'
        {...register("process")}
        placeholder='//Write a Process of Making'
      ></textarea>

      <select
        className='outline-0 border-b p-2 block  text-red-400 bg-transparent'
        {...register("category")}
      >
        <option value="">appetizers/starters</option>
        <option value="">soups</option>
        <option value="">salads</option>
        <option value=""> main courses</option>
      </select>

      <button className='bg-zinc-900 mt-5 px-4 py-2 rounded cursor-pointer block'>Save Recipe</button>
    </form>
  )
}

export default CreateResepis