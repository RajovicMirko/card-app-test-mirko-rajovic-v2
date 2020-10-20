import React from 'react'
import LoadingCustom from '../loaders/atom'

export default function LoadingFullPage(props) {
  const { isLoading=null, colors=['primary'], addClass} = props;
  return isLoading && <div className={`loading-full-page ${addClass}`}><LoadingCustom colors={colors} /></div>
}
