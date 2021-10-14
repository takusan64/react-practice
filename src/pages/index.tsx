import type { NextPage } from 'next'
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

export default Home
