export const UseStateString:string = `// Function Component
const UseStateFunctionComponent: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Typography variant="subtitle1" gutterBottom>
        Function Compnent Counter = {count}
        <IconButton onClick={() => setCount(count + 1)}>
          <ArrowUpward />
        </IconButton>
        <IconButton onClick={() => setCount(count - 1)}>
          <ArrowDownward />
        </IconButton>
      </Typography>
    </>
  )
}

// Class Component
interface ClassState {
  count: number
}
class UseStateClassComponent extends React.Component<{}, ClassState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <>
        <Typography variant="subtitle1" gutterBottom>
          Class Component Counter = {this.state.count}
          <IconButton onClick={() => this.setState({ count: this.state.count + 1 })}>
            <ArrowUpward />
          </IconButton>
          <IconButton onClick={() => this.setState({ count: this.state.count - 1 })}>
            <ArrowDownward />
          </IconButton>
        </Typography>
      </>
    )
  }
}`