import axiosIns from '../../http/http'
import JwtService from './jwtService'

export default function useJwt(axiosIns, jwtOverrideConfig) {
  const jwt = new JwtService(axiosIns, jwtOverrideConfig)

  return {
    jwt,
  }
}
const { jwt } = useJwt(axiosIns, {})
export  {jwt}