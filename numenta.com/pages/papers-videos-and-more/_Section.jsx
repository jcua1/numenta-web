import React from 'react'

import {sortPostsDescend} from '../../utils/universal'

import List from '../../components/List'
import ListItem from '../../components/ListItem'
import Paragraph from '../../components/Paragraph'
import Spacer from '../../components/Spacer'
import SubTitle from '../../components/SubTitle'
import TextLink from '../../components/TextLink'
import Video from '../../components/Video'

import styles from './index.css'


/**
 *
 */
const SectionPapers = (props, {config, route}) => {
  const {links} = config
  const {pages} = route
  const postsLearn = pages.filter(({file}) => (
    (file.path.match(/^.*\/learn\/.*\.md/))
  ))
  const postsPapers = pages.filter(({file}) => (
    (file.path.match(/^.*\/papers\/.*\.md/))
  ))
  const learn = postsLearn.sort(sortPostsDescend).map(({data, file, path}) => {
    const org = data.org ? (<div>{data.org}</div>) : ''
    return (
      <ListItem key={file.stem}>
        <TextLink to={path}>
          {data.title}
        </TextLink>
        <div>
          {data.type}
        </div>
        <div>
          {data.author}
        </div>
        {org}
      </ListItem>
    )
  })
  const papers = postsPapers.sort(sortPostsDescend).map(({data, file}) => {
    const org = data.org ? (<div>{data.org}</div>) : ''
    return (
      <ListItem key={file.stem}>
        <TextLink to={data.link}>
          {data.title}
        </TextLink>
        <div>
          {data.type}
        </div>
        <div>
          {data.author}
        </div>
        {org}
      </ListItem>
    )
  })

  return (
    <div className={styles.columns}>
      <div className={styles.content}>

        <Paragraph>
          To help you learn about our theory and technology, we have organized
          educational content below.
        </Paragraph>
        <List marker="disc">
          <ListItem>
            <TextLink to={links.in.bami}>
              Biological and Machine Intelligence (BaMI)
            </TextLink>
            <Spacer />
            This living book (Biological And Machine Intelligence) documents our
            Hierarchical Temporal Memory framework for both biological and
            machine intelligence. It is designed for anyone who wants to learn
            about HTM cortical theory and its applications for machine
            intelligence.
          </ListItem>
          <ListItem>
            {/* eslint-disable max-len */}
            <TextLink to="https://www.youtube.com/playlist?list=PL3yXMgtrZmDqhsFQzwUC9V8MeeVOQ7eZ9">
              HTM School
            </TextLink>
            {/* eslint-enable max-len */}
            <Spacer />
            This YouTube series is designed to educate the general public about
            Hierarchical Temporal Memory (HTM). Each 10-15 minute episode dives
            into a particular topic of HTM theory.
          </ListItem>
          <ListItem>
            <TextLink to={links.out.org}>
              NuPIC
            </TextLink>
            <Spacer />
            This is the Numenta Platform for Intelligent Computing. For those
            interested in a more technical perspective, go to this site for
            information about our open source communities, including online
            forums and installation instructions.
          </ListItem>
        </List>

        <SubTitle>
          Research Papers
        </SubTitle>
        <Paragraph>
          Here you’ll find a collection of recent Numenta Research papers. Some
          of them are currently under review at journals/conferences but we have
          made all manuscripts available on arXiv, an online repository of
          self-archived scientific papers.
        </Paragraph>
        <List marker="disc">
          {papers}
        </List>

      </div>
      <div className={styles.aside}>

        <Video
          image=""
          respond="mw"
          time="1:00:00"
          title="Jeff Hawkins on The Hard Unsolved Problems in HTM Theory"
          type="youtube"
          videoId="gXP-63sZM_o"
        />

        <SubTitle>
          Learn
        </SubTitle>
        <List marker="disc">
          {learn}
        </List>

      </div>
    </div>
  )
}

SectionPapers.contextTypes = {
  config: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default SectionPapers