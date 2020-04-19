import globalDataTools from '../util/globalData/globalDataTools'
/**
 * @author jm
 * @create 2019-12-11 16:37
 * @desc   系统环境配置
 */
const EnvTest = document.getElementById("EnvTest").getAttribute('EnvTest')
// const EnvTest = 'dev'
export function switchEnvironment(env) {
  globalDataTools.setGlobalData('EnvTest', EnvTest)
}
