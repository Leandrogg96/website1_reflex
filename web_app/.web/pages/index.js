/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { Button as RadixThemesButton, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Text as RadixThemesText, ThemePanel as RadixThemesThemePanel } from "@radix-ui/themes"
import env from "/env.json"
import NextHead from "next/head"



export function Button_d474754a9d7f8322123330cf11ed7fd1 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_123926a228ab954b33ec736733dffdba = useCallback((_e) => addEvents([Event("_redirect", {path:`https://reflex.dev/docs/getting-started/introduction`,external:false})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesButton onClick={on_click_123926a228ab954b33ec736733dffdba} size={`4`}>
  {`Check out our docs!`}
</RadixThemesButton>
  )
}

export function Fragment_1762bb90abdb81b879b2a22edbbe01a1 () {
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <RadixThemesDialog.Root open={connectError !== null}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_1762bb90abdb81b879b2a22edbbe01a1/>
  <RadixThemesFlex css={{"height": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesThemePanel/>
  <RadixThemesFlex align={`center`} css={{"fontSize": "2em"}} direction={`column`} gap={`7`}>
  <RadixThemesHeading size={`9`}>
  {`Welcome!`}
</RadixThemesHeading>
  <RadixThemesText as={`p`}>
  {`My name is Resudo. I'm a Sudoku solver! `}
</RadixThemesText>
  <Button_d474754a9d7f8322123330cf11ed7fd1/>
</RadixThemesFlex>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
