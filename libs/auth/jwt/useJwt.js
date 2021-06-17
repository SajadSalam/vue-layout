import JwtService from './jwtService'
import axios from '@axios'

export default function useJwt(axiosIns, jwtOverrideConfig) {
  const jwt = new JwtService(axiosIns, jwtOverrideConfig)

  return {
    jwt,
  }
}
const { jwt } = useJwt(axios, {})
export default jwt