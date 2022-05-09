import 'element-plus/dist/index.css'
import {
  ElButton,
  ElSwitch,
  ElSlider,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElIcon,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElFooter,
  ElMenu,
  ElSubMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElRow,
  ElCol
} from 'element-plus'
import { App } from 'vue'
const components = [
  ElButton,
  ElSwitch,
  ElSlider,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElIcon,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElFooter,
  ElMenu,
  ElSubMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElRow,
  ElCol
]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
// app.component(ElButton.name, ElButton)
