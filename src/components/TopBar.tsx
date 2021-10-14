import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  AppBar,
  Toolbar,
  FormControl,
  MenuItem,
  Typography
} from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { makeStyles, createStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      paddingRight: theme.spacing(3),
    },
    appbar: {
      marginButtom: theme.spacing(2),
      color: "#fff",
    },
    select: {
      color: "white",
      "&:before": {
        borderColor: "white"
      }
    },
    icon: {
      color: "white"
    }
  }
  ))

type PageProp = {
  name: string
  url: string
}
type PagesProps = {
  pages_info: PageProp[]
}

const TopBar: React.FC<PagesProps> = ({ pages_info }) => {
  const router = useRouter()
  const classes = useStyles()

  const [page, setPage] = useState(router.pathname)
  useEffect(() => {
    router.push(page)
  }, [page])

  const handleChange = (event: SelectChangeEvent) => {
    setPage(event.target.value)
  };

  return (
    <>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h5" component="div" className={classes.title}>
            React Practice
          </Typography>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <Select
              labelId="select-label"
              id="page-select"
              value={page}
              onChange={handleChange}
              label="Select"
              classes={{
                select: classes.select,
                icon: classes.icon,
              }}
            >
              {pages_info.map((page_info, i) => (
                <MenuItem value={page_info.url} key={i}>
                  {page_info.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </>
  )
}
export default TopBar