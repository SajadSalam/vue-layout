import axiosIns from '../../http/http'
import useJwt from './useJwt'
const { jwt } = useJwt(axiosIns, {xx:1})
export default jwt