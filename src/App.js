import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import User from './component/User/index'
import GameResult from './component/GameResult/index'
import {
  MainContainer,
  HeaderContainer,
  RpsContainer,
  Heading,
  ScoreContainer,
  Para,
  Rules,
  Ul,
  NormalContainer,
  NormalButton,
  Image1,
} from './StyledComponent'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    testCase: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    testCase: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    testCase: 'paperButton',
  },
]

class App extends Component {
  state = {
    gameResult: false,
    userUrl: '',
    oppUrl: '',
    score: 0,
    status: '',
  }

  onclickOfOption = (id, imageUrl) => {
    this.setState(prevState => ({gameResult: !prevState.gameResult}))
    const newList = [...choicesList]
    newList.sort(() => Math.random() - 0.5)
    this.setState({oppUrl: newList[0].imageUrl})
    this.setState({userUrl: imageUrl})
    const userId = id
    const oppId = newList[0].id
    if (
      (userId === 'ROCK' && oppId === 'ROCK') ||
      (userId === 'PAPER' && oppId === 'PAPER') ||
      (userId === 'SCISSORS' && oppId === 'SCISSORS')
    ) {
      this.setState(prevState => ({
        status: 'IT IS DRAW',
        score: prevState.score,
      }))
    } else if (
      (userId === 'PAPER' && oppId === 'ROCK') ||
      (userId === 'SCISSORS' && oppId === 'PAPER') ||
      (userId === 'ROCK' && oppId === 'SCISSORS')
    ) {
      this.setState(prevState => ({
        status: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else if (
      (userId === 'SCISSORS' && oppId === 'ROCK') ||
      (userId === 'ROCK' && oppId === 'PAPER') ||
      (userId === 'PAPER' && oppId === 'SCISSORS')
    ) {
      this.setState(prevState => ({
        status: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    }
  }

  onclickReset = () => {
    this.setState(prevState => ({gameResult: !prevState.gameResult}))
  }

  //   userOptionRender = () => {
  //     const {userUrl} = this.state
  //     console.log(userUrl)
  //     return (
  //       <NormalContainer>
  //         <Image src={userUrl} alt="your choice" />
  //       </NormalContainer>
  //     )
  //   }

  //   opponentOptionRender = () => {
  //     const {oppUrl} = this.state
  //     console.log(oppUrl)

  //     return (
  //       <NormalContainer>
  //         <Image src={oppUrl} alt="opponent choice" />
  //       </NormalContainer>
  //     )
  //   }

  render() {
    const {gameResult, status, score, userUrl, oppUrl} = this.state

    return (
      <MainContainer>
        <HeaderContainer>
          <RpsContainer>
            <Heading>
              Rock <br />
              Paper <br />
              Scissors
            </Heading>
          </RpsContainer>
          <ScoreContainer>
            <Para>Score</Para>
            <Para>{score}</Para>
          </ScoreContainer>
        </HeaderContainer>
        {gameResult ? (
          <GameResult
            userUrl={userUrl}
            oppUrl={oppUrl}
            status={status}
            onclickReset={this.onclickReset}
          />
        ) : (
          <Ul className="ul">
            {choicesList.map(eachItem => (
              <User
                list={eachItem}
                key={eachItem.testCase}
                onclickOfOption={this.onclickOfOption}
                onScore={this.onScore}
              />
            ))}
          </Ul>
        )}
        <Rules>
          <Popup
            modal
            trigger={<NormalButton type="button">Rules</NormalButton>}
          >
            {close => (
              <>
                <NormalContainer>
                  <NormalButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </NormalButton>
                </NormalContainer>
                <NormalContainer>
                  <Image1
                    className="popimg"
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </NormalContainer>
              </>
            )}
          </Popup>
        </Rules>
      </MainContainer>
    )
  }
}

export default App
