<template>
  <div>
    <div class="image-wrapper">
      <span class="image-text">Draggable Columns</span>
      <img  class="image-container" alt="Editable Design" src="https://efsane.s3.eu-central-1.amazonaws.com/efsane-draggable.gif?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGV1LWNlbnRyYWwtMSJGMEQCIDAjHGOdAtsfmQtTa5UVEUH%2FjBgw7wrwBPsAhDu2GcMpAiBLxG6HbtkKuvRvpieRTecV0IRXbZQP%2FcKWvFwx%2Bd9QYCrkAghgEAAaDDgwNTkyMzA1NDYwNyIME63HnVRYHshGczHhKsECUwuqldUaJnMgS%2BxGOgxdjPg5k7Joc33%2Fkzfyjl1cF4prNB0Cq63mkFk9vo%2FUQp5jlj2lI9E5hkAyL6oAledu02WPiSN1lDwLbm5yIQAoUgBJkOeMLTc8%2FEeH7Rk%2ByowHBMsV6dTRiSNZDTWYuZSd0eCzvvHzqZ6hYWUBS37PpX1f725sELx1JV%2BJSPaXOdikUHPbMpFMCY06SXoAlIvaTMBk9wtxe8dfjhEC1ZPTKjm7bvjLmsNcWScNRSRWiw4aPAaZ5c6nCe2%2FbQE07xXjmn9PhN6MxVMwSKbl7fYFQ2y0QOufRxpryG8xQZWudjTYkst5oHmAhiRrWW0of3OgEB5Btf14D637X3JI8vgTMLQqsp7e%2Bulis20FoB3NDVKafwGNMp5g4Lk0MunlwBBJo9IFuETxxk%2Fuy32k5sfcPQsQML3eppIGOrQCq8AGt20XqJAPqo2cFh3Z1RNKbpR8tDWzdC3qj988zcnZ9ZrAud%2Bfsmbs8gF1RGTcKowc3A7P80Z1%2FEiqHY4lQ%2BbHjY44WL8d2hIygOjVOQW5KJl7%2FV2FSUolP2CJRdC9oEFI6sy%2BrxBWk%2BP7pK9dOTGROOg%2Fw85%2F2jzyiibTUlFO8kMf%2F%2Bi4QK0CHUmMTNks3eSMJ%2Bt%2BKjPCaHp%2B3L5TAaWT6tk8u3rgOGI3WeWRzKtw8G%2FN%2FuSwIzwweEVzAPJiR%2B%2BarKVl24z0e90W5Lhh91%2FXAkVvlgnNdC7uAZLGP5MbM7Q1pxbrRSKrWIbz%2FADAlcl6yPyblS%2BMEVr6CGvYBagGDtwdiAyzCxPoFn698dH%2FgDECmus10E8a4YqJnHQsSGu6cy1HJwn4x14oSDPZLhw1xi4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220403T193910Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA3XJGB4QHYEDJMREL%2F20220403%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=bb109f15678db922d77ceeb5f37cfaf9e958751eff9393b56a6de103c5b24c6e">
    </div>
    <div class="image-wrapper">
      <span class="image-text">Dynamic Columns From Data</span>
      <img  class="image-container" alt="Editable Design" src="https://efsane.s3.eu-central-1.amazonaws.com/efsane-dynamic-columns.gif?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGV1LWNlbnRyYWwtMSJGMEQCIDAjHGOdAtsfmQtTa5UVEUH%2FjBgw7wrwBPsAhDu2GcMpAiBLxG6HbtkKuvRvpieRTecV0IRXbZQP%2FcKWvFwx%2Bd9QYCrkAghgEAAaDDgwNTkyMzA1NDYwNyIME63HnVRYHshGczHhKsECUwuqldUaJnMgS%2BxGOgxdjPg5k7Joc33%2Fkzfyjl1cF4prNB0Cq63mkFk9vo%2FUQp5jlj2lI9E5hkAyL6oAledu02WPiSN1lDwLbm5yIQAoUgBJkOeMLTc8%2FEeH7Rk%2ByowHBMsV6dTRiSNZDTWYuZSd0eCzvvHzqZ6hYWUBS37PpX1f725sELx1JV%2BJSPaXOdikUHPbMpFMCY06SXoAlIvaTMBk9wtxe8dfjhEC1ZPTKjm7bvjLmsNcWScNRSRWiw4aPAaZ5c6nCe2%2FbQE07xXjmn9PhN6MxVMwSKbl7fYFQ2y0QOufRxpryG8xQZWudjTYkst5oHmAhiRrWW0of3OgEB5Btf14D637X3JI8vgTMLQqsp7e%2Bulis20FoB3NDVKafwGNMp5g4Lk0MunlwBBJo9IFuETxxk%2Fuy32k5sfcPQsQML3eppIGOrQCq8AGt20XqJAPqo2cFh3Z1RNKbpR8tDWzdC3qj988zcnZ9ZrAud%2Bfsmbs8gF1RGTcKowc3A7P80Z1%2FEiqHY4lQ%2BbHjY44WL8d2hIygOjVOQW5KJl7%2FV2FSUolP2CJRdC9oEFI6sy%2BrxBWk%2BP7pK9dOTGROOg%2Fw85%2F2jzyiibTUlFO8kMf%2F%2Bi4QK0CHUmMTNks3eSMJ%2Bt%2BKjPCaHp%2B3L5TAaWT6tk8u3rgOGI3WeWRzKtw8G%2FN%2FuSwIzwweEVzAPJiR%2B%2BarKVl24z0e90W5Lhh91%2FXAkVvlgnNdC7uAZLGP5MbM7Q1pxbrRSKrWIbz%2FADAlcl6yPyblS%2BMEVr6CGvYBagGDtwdiAyzCxPoFn698dH%2FgDECmus10E8a4YqJnHQsSGu6cy1HJwn4x14oSDPZLhw1xi4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220403T194033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIA3XJGB4QHYEDJMREL%2F20220403%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=4969208369699447ebf9157422bb323b351dfeddc0b4c387b876c261fe1d963c">
    </div>
    <div class="image-wrapper">
      <span class="image-text">Resizable Columns</span>
      <img  class="image-container" alt="Editable Design" src="https://efsane.s3.eu-central-1.amazonaws.com/efsane-resizable-columns.gif?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGV1LWNlbnRyYWwtMSJGMEQCIDAjHGOdAtsfmQtTa5UVEUH%2FjBgw7wrwBPsAhDu2GcMpAiBLxG6HbtkKuvRvpieRTecV0IRXbZQP%2FcKWvFwx%2Bd9QYCrkAghgEAAaDDgwNTkyMzA1NDYwNyIME63HnVRYHshGczHhKsECUwuqldUaJnMgS%2BxGOgxdjPg5k7Joc33%2Fkzfyjl1cF4prNB0Cq63mkFk9vo%2FUQp5jlj2lI9E5hkAyL6oAledu02WPiSN1lDwLbm5yIQAoUgBJkOeMLTc8%2FEeH7Rk%2ByowHBMsV6dTRiSNZDTWYuZSd0eCzvvHzqZ6hYWUBS37PpX1f725sELx1JV%2BJSPaXOdikUHPbMpFMCY06SXoAlIvaTMBk9wtxe8dfjhEC1ZPTKjm7bvjLmsNcWScNRSRWiw4aPAaZ5c6nCe2%2FbQE07xXjmn9PhN6MxVMwSKbl7fYFQ2y0QOufRxpryG8xQZWudjTYkst5oHmAhiRrWW0of3OgEB5Btf14D637X3JI8vgTMLQqsp7e%2Bulis20FoB3NDVKafwGNMp5g4Lk0MunlwBBJo9IFuETxxk%2Fuy32k5sfcPQsQML3eppIGOrQCq8AGt20XqJAPqo2cFh3Z1RNKbpR8tDWzdC3qj988zcnZ9ZrAud%2Bfsmbs8gF1RGTcKowc3A7P80Z1%2FEiqHY4lQ%2BbHjY44WL8d2hIygOjVOQW5KJl7%2FV2FSUolP2CJRdC9oEFI6sy%2BrxBWk%2BP7pK9dOTGROOg%2Fw85%2F2jzyiibTUlFO8kMf%2F%2Bi4QK0CHUmMTNks3eSMJ%2Bt%2BKjPCaHp%2B3L5TAaWT6tk8u3rgOGI3WeWRzKtw8G%2FN%2FuSwIzwweEVzAPJiR%2B%2BarKVl24z0e90W5Lhh91%2FXAkVvlgnNdC7uAZLGP5MbM7Q1pxbrRSKrWIbz%2FADAlcl6yPyblS%2BMEVr6CGvYBagGDtwdiAyzCxPoFn698dH%2FgDECmus10E8a4YqJnHQsSGu6cy1HJwn4x14oSDPZLhw1xi4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220403T194222Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA3XJGB4QHYEDJMREL%2F20220403%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=2eca778fc0df6dfffeeb11e5b4f0064bb6e49e7711c11f29e583dd4db570b392">
    </div>
    <div class="image-wrapper">
      <span class="image-text">Editable Columns</span>
      <img  class="image-container" alt="Editable Design" src="https://efsane.s3.eu-central-1.amazonaws.com/efsane-editable-columns.gif?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGV1LWNlbnRyYWwtMSJGMEQCIDAjHGOdAtsfmQtTa5UVEUH%2FjBgw7wrwBPsAhDu2GcMpAiBLxG6HbtkKuvRvpieRTecV0IRXbZQP%2FcKWvFwx%2Bd9QYCrkAghgEAAaDDgwNTkyMzA1NDYwNyIME63HnVRYHshGczHhKsECUwuqldUaJnMgS%2BxGOgxdjPg5k7Joc33%2Fkzfyjl1cF4prNB0Cq63mkFk9vo%2FUQp5jlj2lI9E5hkAyL6oAledu02WPiSN1lDwLbm5yIQAoUgBJkOeMLTc8%2FEeH7Rk%2ByowHBMsV6dTRiSNZDTWYuZSd0eCzvvHzqZ6hYWUBS37PpX1f725sELx1JV%2BJSPaXOdikUHPbMpFMCY06SXoAlIvaTMBk9wtxe8dfjhEC1ZPTKjm7bvjLmsNcWScNRSRWiw4aPAaZ5c6nCe2%2FbQE07xXjmn9PhN6MxVMwSKbl7fYFQ2y0QOufRxpryG8xQZWudjTYkst5oHmAhiRrWW0of3OgEB5Btf14D637X3JI8vgTMLQqsp7e%2Bulis20FoB3NDVKafwGNMp5g4Lk0MunlwBBJo9IFuETxxk%2Fuy32k5sfcPQsQML3eppIGOrQCq8AGt20XqJAPqo2cFh3Z1RNKbpR8tDWzdC3qj988zcnZ9ZrAud%2Bfsmbs8gF1RGTcKowc3A7P80Z1%2FEiqHY4lQ%2BbHjY44WL8d2hIygOjVOQW5KJl7%2FV2FSUolP2CJRdC9oEFI6sy%2BrxBWk%2BP7pK9dOTGROOg%2Fw85%2F2jzyiibTUlFO8kMf%2F%2Bi4QK0CHUmMTNks3eSMJ%2Bt%2BKjPCaHp%2B3L5TAaWT6tk8u3rgOGI3WeWRzKtw8G%2FN%2FuSwIzwweEVzAPJiR%2B%2BarKVl24z0e90W5Lhh91%2FXAkVvlgnNdC7uAZLGP5MbM7Q1pxbrRSKrWIbz%2FADAlcl6yPyblS%2BMEVr6CGvYBagGDtwdiAyzCxPoFn698dH%2FgDECmus10E8a4YqJnHQsSGu6cy1HJwn4x14oSDPZLhw1xi4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220403T194315Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA3XJGB4QHYEDJMREL%2F20220403%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=9e6ba03188423ecf9af588fdeb79952c65f5c2e18a0ea47ec2ed845fc8ea3477">
    </div>
    <div class="image-wrapper">
      <span class="image-text">Editable Design</span>
      <img  class="image-container" alt="Editable Design" src="https://efsane.s3.eu-central-1.amazonaws.com/efsane-editable-design.gif?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGV1LWNlbnRyYWwtMSJGMEQCIDAjHGOdAtsfmQtTa5UVEUH%2FjBgw7wrwBPsAhDu2GcMpAiBLxG6HbtkKuvRvpieRTecV0IRXbZQP%2FcKWvFwx%2Bd9QYCrkAghgEAAaDDgwNTkyMzA1NDYwNyIME63HnVRYHshGczHhKsECUwuqldUaJnMgS%2BxGOgxdjPg5k7Joc33%2Fkzfyjl1cF4prNB0Cq63mkFk9vo%2FUQp5jlj2lI9E5hkAyL6oAledu02WPiSN1lDwLbm5yIQAoUgBJkOeMLTc8%2FEeH7Rk%2ByowHBMsV6dTRiSNZDTWYuZSd0eCzvvHzqZ6hYWUBS37PpX1f725sELx1JV%2BJSPaXOdikUHPbMpFMCY06SXoAlIvaTMBk9wtxe8dfjhEC1ZPTKjm7bvjLmsNcWScNRSRWiw4aPAaZ5c6nCe2%2FbQE07xXjmn9PhN6MxVMwSKbl7fYFQ2y0QOufRxpryG8xQZWudjTYkst5oHmAhiRrWW0of3OgEB5Btf14D637X3JI8vgTMLQqsp7e%2Bulis20FoB3NDVKafwGNMp5g4Lk0MunlwBBJo9IFuETxxk%2Fuy32k5sfcPQsQML3eppIGOrQCq8AGt20XqJAPqo2cFh3Z1RNKbpR8tDWzdC3qj988zcnZ9ZrAud%2Bfsmbs8gF1RGTcKowc3A7P80Z1%2FEiqHY4lQ%2BbHjY44WL8d2hIygOjVOQW5KJl7%2FV2FSUolP2CJRdC9oEFI6sy%2BrxBWk%2BP7pK9dOTGROOg%2Fw85%2F2jzyiibTUlFO8kMf%2F%2Bi4QK0CHUmMTNks3eSMJ%2Bt%2BKjPCaHp%2B3L5TAaWT6tk8u3rgOGI3WeWRzKtw8G%2FN%2FuSwIzwweEVzAPJiR%2B%2BarKVl24z0e90W5Lhh91%2FXAkVvlgnNdC7uAZLGP5MbM7Q1pxbrRSKrWIbz%2FADAlcl6yPyblS%2BMEVr6CGvYBagGDtwdiAyzCxPoFn698dH%2FgDECmus10E8a4YqJnHQsSGu6cy1HJwn4x14oSDPZLhw1xi4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220403T194337Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA3XJGB4QHYEDJMREL%2F20220403%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=e44177a6736278c24a9f48e4a474305d31e27ad564a2fa56964c2cadb7547495">
    </div>
  </div>
</template>

<script>
export default {
  name: 'overview'
}
</script>

<style lang="scss" scoped>
.image-wrapper{
  position: relative;
  width: 100%;
  display: grid;
  place-content: center;
  padding-inline: 5px;
}
.image-container {
  position: relative;
  border-radius: 8px;
  width: 100%;
  height: 100%;
}

.image-text {
  font-weight: 600;
  font-size: 2em;
  background-color: #fff;
  padding: 20px;
}
</style>
