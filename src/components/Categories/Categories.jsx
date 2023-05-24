import { Input } from '../Form/Input'
import { List } from './Categories.styles'

const categoriesList = {
  mainCourse: 'Main Course',
  breakfast: 'Breakfast',
  dessert: 'Dessert',
  salad: 'Salad',
  soup: 'Soup',
  snack: 'Snack',
  beverage: 'Beverage',
  sauce: 'Sauce',
}

export function Categories({ handleChange }) {
  return (
    <List>
      <h3>Categories</h3>
      <div className='categories'>
        <Input
          label='All'
          type='radio'
          name='category'
          value='all'
          id='all'
          onChange={handleChange}
          defaultChecked
        />

        {Object.entries(categoriesList).map(([category, value]) => (
          <Input
            key={category}
            type='radio'
            name='category'
            label={value}
            value={category}
            id={category}
            onChange={handleChange}
          />
        ))}
      </div>
    </List>
  )
}
