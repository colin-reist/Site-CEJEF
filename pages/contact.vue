<template>
  <div>
    <UCard class="mb-8">
      <template #header>
        <h1 class="text-4xl font-bold">
          Contactez-nous
        </h1>
      </template>
      <p class="text-xl text-gray-700 dark:text-gray-300">
        N'hésitez pas à nous contacter pour toute question ou demande d'information
      </p>
    </UCard>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <UCard>
        <template #header>
          <h2 class="text-2xl font-semibold">Formulaire de contact</h2>
        </template>
        <UForm :state="formState" @submit="onSubmit" class="space-y-4">
          <UFormGroup label="Nom" name="name" required>
            <UInput v-model="formState.name" placeholder="Votre nom" />
          </UFormGroup>

          <UFormGroup label="Email" name="email" required>
            <UInput v-model="formState.email" type="email" placeholder="votre.email@example.com" />
          </UFormGroup>

          <UFormGroup label="Téléphone" name="phone">
            <UInput v-model="formState.phone" type="tel" placeholder="+41 32 123 45 67" />
          </UFormGroup>

          <UFormGroup label="Division concernée" name="division">
            <USelect
              v-model="formState.division"
              :options="divisionOptions"
              placeholder="Sélectionnez une division"
            />
          </UFormGroup>

          <UFormGroup label="Sujet" name="subject" required>
            <UInput v-model="formState.subject" placeholder="Sujet de votre message" />
          </UFormGroup>

          <UFormGroup label="Message" name="message" required>
            <UTextarea
              v-model="formState.message"
              placeholder="Votre message..."
              :rows="6"
            />
          </UFormGroup>

          <UButton type="submit" color="primary" size="lg" block>
            Envoyer le message
          </UButton>
        </UForm>
      </UCard>

      <div class="space-y-6">
        <UCard>
          <template #header>
            <h2 class="text-2xl font-semibold">Coordonnées générales</h2>
          </template>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-map-pin" class="text-primary text-xl mt-1" />
              <div>
                <p class="font-semibold">Adresse</p>
                <p class="text-gray-600 dark:text-gray-400">
                  CEJEF - Centre d'enseignement professionnel<br>
                  Rue de la Blancherie 7<br>
                  2800 Delémont<br>
                  Suisse
                </p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-phone" class="text-primary text-xl mt-1" />
              <div>
                <p class="font-semibold">Téléphone</p>
                <p class="text-gray-600 dark:text-gray-400">+41 32 123 45 60</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-envelope" class="text-primary text-xl mt-1" />
              <div>
                <p class="font-semibold">Email</p>
                <p class="text-gray-600 dark:text-gray-400">info@cejef.ch</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-clock" class="text-primary text-xl mt-1" />
              <div>
                <p class="font-semibold">Horaires d'ouverture</p>
                <p class="text-gray-600 dark:text-gray-400">
                  Lundi - Vendredi: 08:00 - 12:00, 13:30 - 17:00<br>
                  Samedi - Dimanche: Fermé
                </p>
              </div>
            </div>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h2 class="text-2xl font-semibold">Accès</h2>
          </template>
          <div class="space-y-3">
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-truck" class="text-primary text-xl mt-1" />
              <div>
                <p class="font-semibold">Transports publics</p>
                <p class="text-gray-600 dark:text-gray-400">
                  Arrêt de bus "CEJEF" - Lignes 1, 2, 3<br>
                  Gare de Delémont à 10 minutes à pied
                </p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-building-office" class="text-primary text-xl mt-1" />
              <div>
                <p class="font-semibold">Parking</p>
                <p class="text-gray-600 dark:text-gray-400">
                  Places de parking disponibles pour les visiteurs
                </p>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const toast = useToast()

const formState = ref({
  name: '',
  email: '',
  phone: '',
  division: '',
  subject: '',
  message: ''
})

const divisionOptions = [
  { label: 'Division Technique', value: 'technique' },
  { label: 'Division Commerce', value: 'commerce' },
  { label: 'Division Santé-Social', value: 'sante-social' },
  { label: 'Division Artisanat', value: 'artisanat' },
  { label: 'Division Nature-Alimentation', value: 'nature-alimentation' },
  { label: 'Division Arts-Appliqués', value: 'arts-appliques' }
]

const onSubmit = async () => {
  // In production, this would send to Directus or an API endpoint
  toast.add({
    title: 'Message envoyé',
    description: 'Nous vous répondrons dans les plus brefs délais.',
    color: 'green'
  })
  
  // Reset form
  formState.value = {
    name: '',
    email: '',
    phone: '',
    division: '',
    subject: '',
    message: ''
  }
}
</script>
