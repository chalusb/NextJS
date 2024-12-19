'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    model: '',
    email: '',
    name: '',
    lastName: '',
    phone: '',
    testDrive: false,
    privacy: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Cotiza tu Volkswagen</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <div>
          <Select onValueChange={(value) => setFormData({ ...formData, model: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona un modelo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="virtus">Virtus</SelectItem>
              <SelectItem value="polo">Polo 2024</SelectItem>
              <SelectItem value="saveiro">Saveiro Robust 2025</SelectItem>
              <SelectItem value="taos">Taos</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail*</Label>
            <Input
              id="email"
              type="email"
              required
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Nombre*</Label>
            <Input
              id="name"
              required
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Apellido*</Label>
            <Input
              id="lastName"
              required
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono*</Label>
            <Input
              id="phone"
              type="tel"
              required
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="testDrive"
              onCheckedChange={(checked) => 
                setFormData({ ...formData, testDrive: checked as boolean })
              }
            />
            <Label htmlFor="testDrive">Me interesa realizar una Prueba de manejo</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="privacy"
              required
              onCheckedChange={(checked) => 
                setFormData({ ...formData, privacy: checked as boolean })
              }
            />
            <Label htmlFor="privacy">
              He leído y acepto el{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Aviso de Privacidad
              </a>
            </Label>
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-[#001E50] hover:bg-[#001E50]/90"
        >
          Enviar
        </Button>
      </form>
    </section>
  )
}

