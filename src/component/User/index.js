import {List, Button, Image} from './StyledComponent'

const User = props => {
  const {list, onclickOfOption} = props
  const {id, imageUrl, testCase} = list

  const onclickOnOptions = () => {
    onclickOfOption(id, imageUrl)
  }

  return (
    <List>
      <Button type="button" data-testid={testCase} onClick={onclickOnOptions}>
        <Image src={imageUrl} alt={id} />
      </Button>
    </List>
  )
}

export default User
