import { AuthProvider } from './auth'
import { DashboardProvider } from './dashboard'
import { ContextsProviderProps } from './types'

function Contexts ({ children }: ContextsProviderProps) {
  return (
    
      <AuthProvider>
          <DashboardProvider>
            {children}
          </DashboardProvider>
      </AuthProvider>
 
  )
}

export { Contexts }
