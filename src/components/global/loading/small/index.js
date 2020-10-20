import React from 'react'
import LoadingCustom from '../loaders/atom'

export default function LoadingSmall(props) {
  const { isLoading=null, colors=['primary'], addClass} = props;
  return isLoading && <div className={`loading-small ${addClass}`}><LoadingCustom colors={colors} /></div>
}
