/**
 * @see See https://docs.sonarsource.com/sonarqube/latest/extension-guide/developing-a-plugin/adding-pages-to-the-webapp/#create-a-javascript-file-per-page
 */
import { createApp } from 'vue'
import { DashboardPage } from '@creedengo/vue-dashboard-page'

function start(options) {
    const rootNode = options.el;
    const project = options.projectKey || options.project || '';
    const branch = options.branch || 'main';

    const app = createApp(DashboardPage, {
        project,
        branch,
    });

    app.mount(rootNode);

    return () => stop(app, rootNode);
}

function stop(app, rootNode) {
    app.unmount();
    rootNode.innerHTML = '';
}

window.registerExtension('creedengodashboard/view', start, true)