<template>
  <div>
    <h1>ヘルプページ</h1>
    <div id="QandA-1">
      <h2>よくあるご質問</h2>
      <dl>
        <dt>質問タイトル</dt>
        <dd>回答内容</dd>
        <dt>質問タイトル</dt>
        <dd>回答内容</dd>
        <dt>質問タイトル</dt>
        <dd>回答内容</dd>
      </dl>
    </div>
  </div>
</template>
<style scoped>
#QandA-1 dt {
  background: #000;
  color: #fff;
  padding: 8px;
  border-radius: 2px;
}
#QandA-1 dt:before {
  font-weight: bold;
  margin-right: 8px;
}
#QandA-1 dd {
  margin: 24px 16px 40px 32px;
  line-height: 140%;
  text-indent: -24px;
}
#QandA-1 dd:before {
  font-weight: bold;
  margin-right: 8px;
}
</style>
