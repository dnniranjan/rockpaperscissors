import {
  Para,
  MainResult,
  Result,
  You,
  Opponent,
  NormalContainer,
  NormalButton,
  Image,
} from './StyledComponents'

const GameResult = props => {
  const {userUrl, oppUrl, status, onclickReset} = props

  const onCLickPlay = () => {
    onclickReset()
  }
  const userOptionRender = () => <Image src={userUrl} alt="your choice" />

  const opponentOptionRender = () => (
    <Image src={oppUrl} alt="opponent choice" />
  )

  return (
    <MainResult>
      <Result>
        <You>
          <Para>YOU</Para>
          <NormalContainer>{userOptionRender()}</NormalContainer>
        </You>

        <Opponent>
          <Para>OPPONENT</Para>
          <NormalContainer>{opponentOptionRender()}</NormalContainer>
        </Opponent>
      </Result>
      <Para>{status}</Para>
      <NormalButton type="button" onClick={onCLickPlay}>
        PLAY AGAIN
      </NormalButton>
    </MainResult>
  )
}

export default GameResult
