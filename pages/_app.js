import '@styles/index.scss'
import { Provider } from 'react-redux'
import makeStore from '@store'
import withRedux from 'next-redux-wrapper'
import { GET_LESSONS } from '@constants/actionTypes'


// This default export is required in a new `pages/_app.js` file.
const EnhancedApp = ({ Component, pageProps, store }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

EnhancedApp.getInitialProps = async ({ Component, ctx }) => {

  await ctx.store.dispatch({
    type: GET_LESSONS,
    payload: []
  })
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {}

  return { pageProps }
}

export default withRedux(makeStore)(EnhancedApp)
