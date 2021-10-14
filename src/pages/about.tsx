import type { NextPage } from 'next'
import Link from "next/link"
import CodeHighlight from 'components/CodeHighlight'

const About: NextPage = () => {
  const codeString = `import type { NextPage } from 'next'
  import Link from 'next/link'
  import { createStyles, makeStyles } from '@mui/styles';
  import { Theme } from '@mui/material/styles';
  import { grey } from '@mui/material/colors'

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        backgroundColor: grey[200]
      },
    }),
  );

  const Home: NextPage = () => {
    const classes = useStyles()
    return (
      <div className={classes.root}>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <h2>
          <Link href="/about">
            <button>Go about Page.</button>
          </Link>
        </h2>
      </div>
    )
  }

  export default Home`;
  return (
    <>
      <p>About page</p>
      <Link href="/">
        <a> Go to Home </a>
      </Link>
      <CodeHighlight code_str={codeString} />
    </>
  )
}

export default About