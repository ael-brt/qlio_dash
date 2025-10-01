import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Settings, Bell, Shield, Database, Palette } from "lucide-react"

export function SettingsTab() {
  return (
    <div className="space-y-6">
      {/* Paramètres généraux */}
      <Card className="border-0 shadow-soft bg-surface">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Paramètres généraux
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="site-name">Nom du site</Label>
              <Input id="site-name" defaultValue="Mon Dashboard" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Fuseau horaire</Label>
              <Select defaultValue="europe-paris">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="europe-paris">Europe/Paris</SelectItem>
                  <SelectItem value="america-newyork">America/New_York</SelectItem>
                  <SelectItem value="asia-tokyo">Asia/Tokyo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              placeholder="Description de votre tableau de bord..."
              defaultValue="Tableau de bord analytique pour le suivi des performances business"
            />
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card className="border-0 shadow-soft bg-surface">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { label: 'Alertes de performance', description: 'Recevoir des alertes quand les métriques dépassent les seuils', enabled: true },
            { label: 'Rapports hebdomadaires', description: 'Rapport automatique chaque lundi matin', enabled: true },
            { label: 'Nouveaux utilisateurs', description: 'Notification lors de nouvelles inscriptions', enabled: false },
            { label: 'Erreurs système', description: 'Alertes en cas d\'erreur ou de dysfonctionnement', enabled: true },
          ].map((notification) => (
            <div key={notification.label} className="flex items-center justify-between p-3 border border-border/50 rounded-lg">
              <div className="space-y-1">
                <p className="font-medium text-foreground">{notification.label}</p>
                <p className="text-sm text-muted-foreground">{notification.description}</p>
              </div>
              <Switch defaultChecked={notification.enabled} />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Sécurité */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-0 shadow-soft bg-surface">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Sécurité
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Mot de passe actuel</Label>
              <Input id="current-password" type="password" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="new-password">Nouveau mot de passe</Label>
              <Input id="new-password" type="password" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
              <Input id="confirm-password" type="password" />
            </div>
            
            <Button className="w-full">Mettre à jour le mot de passe</Button>
            
            <div className="pt-4 border-t">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Authentification à deux facteurs</p>
                  <p className="text-sm text-muted-foreground">Sécurisez votre compte avec la 2FA</p>
                </div>
                <Badge variant="outline">Inactif</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-soft bg-surface">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Database className="h-5 w-5" />
              Données et API
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="api-key">Clé API</Label>
              <div className="flex gap-2">
                <Input id="api-key" value="sk-1234567890abcdef" readOnly />
                <Button variant="outline" size="sm">Copier</Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Rétention des données</Label>
              <Select defaultValue="12months">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3months">3 mois</SelectItem>
                  <SelectItem value="6months">6 mois</SelectItem>
                  <SelectItem value="12months">12 mois</SelectItem>
                  <SelectItem value="24months">24 mois</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full">Exporter les données</Button>
              <Button variant="destructive" className="w-full">Supprimer toutes les données</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-4">
        <Button variant="outline">Annuler</Button>
        <Button>Enregistrer les modifications</Button>
      </div>
    </div>
  )
}
