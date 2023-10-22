import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'
import AppServiceAccountsListDataTable from '@/components/AppServiceAccountsListDataTable'
import DefaultBreadcrumb from '@/components/tabs/DefaultBreadcrumb'
import CreateAppServiceAccount from '@/components/appServiceManager/CreateAppServiceAccount'

export default function AppServiceManager() {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    App Service Manager
                </h2>
            }>
            <Head>
                <title>Laravel - App Service Manager</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            Your App Service Manager
                        </div>
                    </div>

                    {/*<DefaultTabs />*/}
                    <div className={`py-4`}>
                        <DefaultBreadcrumb />
                    </div>

                    <div className={`py-4`}>
                        <CreateAppServiceAccount />
                    </div>

                    <AppServiceAccountsListDataTable />
                </div>
            </div>
        </AppLayout>
    )
}
