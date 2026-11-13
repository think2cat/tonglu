(() => {
  'use strict';
  const dialog = document.querySelector('#wechat-dialog');
  let opener;
  document.querySelectorAll('[data-open-wechat]').forEach(button => {
    button.addEventListener('click', () => {
      opener = button;
      dialog.showModal();
      document.body.classList.add('dialog-open');
    });
  });
  const closeDialog = () => dialog.close();
  dialog.querySelector('.dialog-close').addEventListener('click', closeDialog);
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) closeDialog();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    opener?.focus();
  });
  document.querySelector('#copy-name').addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    try {
      await navigator.clipboard.writeText('童路近邻');
      status.textContent = '已复制「童路近邻」，打开微信粘贴搜索即可。';
    } catch {
      status.textContent = '暂时无法自动复制，请选中「童路近邻」手动复制。';
    }
  });
  const scene = document.querySelector('.product-scene');
  document.querySelectorAll('[data-school]').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-school]').forEach(item => {
        const selected = item.dataset.school === button.dataset.school;
        item.classList.toggle('is-selected', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
      document.querySelector('#demo-caption').textContent = `已选中示例学校 ${button.dataset.school.toUpperCase()}，地图与列表同步。真实学校详情请前往小程序。`;
    });
  });
  document.querySelectorAll('[data-demo]').forEach(button => {
    button.addEventListener('click', () => {
      const scope = button.dataset.demo === 'scope';
      scene.classList.toggle('show-scope', scope);
      document.querySelectorAll('[data-demo]').forEach(item => {
        const selected = item === button;
        item.classList.toggle('is-active', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
      document.querySelectorAll('.demo-status').forEach((item, index) => {
        item.textContent = scope ? ['范围命中 · 仅作示意', '范围待核实 · 仅作示意', '周边学校照常显示'][index] : item.dataset.default;
      });
      document.querySelector('#demo-caption').textContent = scope ? '示意：范围标记不改变周边学校列表；命中范围不代表具备报名资格。' : '地图标记与学校列表同步选中。真实查询请前往小程序。';
    });
  });
})();
