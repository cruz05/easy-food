import { useState } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { RecipeList } from '../Recipes/RecipeList'
import { Input } from '../Form/Input'
import { Container } from './UserRecipes.styles'
import { BiPlus } from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'

export function UserRecipes() {
  const [recipes, setRecipes] = useLocalStorage('createdRecipes')
  const [modal, setModal] = useState(false)

  const handleSubmit = e => {
    const title = e.target.title.value
    const image = e.target.image.value

    if (title && image) {
      setRecipes([
        ...recipes,
        { id: title.toLowerCase().replaceAll(' ', '-'), title, image },
      ])
    }
    setModal(false)
  }

  return (
    <Container>
      <div className='header'>
        <h3>My Recipes</h3>
        <button
          type='button'
          className='btn-add'
          onClick={() => setModal(true)}>
          <BiPlus /> Create Recipe
        </button>
      </div>
      {modal ? (
        <form onSubmit={handleSubmit}>
          <MdOutlineClose onClick={() => setModal(false)} />
          <Input label='Title' type='text' id='title' placeholder='Recipe' />
          <Input
            label='Image'
            type='text'
            id='image'
            placeholder='Insert image url'
          />
          <button type='submit'>Save</button>
        </form>
      ) : (
        <RecipeList
          recipes={recipes}
          altMessage="You haven't created any recipes."
        />
      )}
    </Container>
  )
}
