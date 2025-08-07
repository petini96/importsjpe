<template>
  <q-page class="q-pa-md">
    <div class="text-h4 q-mb-md">Gerenciamento de Usuários</div>

    <q-table
      title="Usuários"
      :rows="users"
      :columns="columns"
      row-key="id"
      :loading="loading"
    >
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            color="primary"
            icon="manage_accounts"
            flat
            dense
            @click="openPermissionsDialog(props.row)"
          />
        </q-td>
      </template>
    </q-table>

    <q-dialog v-model="dialogVisible">
      <q-card style="width: 500px; max-width: 90vw;">
        <q-card-section>
          <div class="text-h6">Permissões para {{ selectedUser?.username }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-list bordered separator>
            <q-item v-for="role in allAvailableRoles" :key="role.id" tag="label" v-ripple>
              <q-item-section>
                <q-item-label>{{ role.name }}</q-item-label>
                <q-item-label caption>{{ role.description }}</q-item-label>
              </q-item-section>
              <q-item-section side top>
                <q-checkbox v-model="selectedUserRoles" :val="role.id" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="primary" v-close-popup />
          <q-btn flat label="Salvar" color="primary" @click="savePermissions" />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useQuasar } from 'quasar';
import type { QTableColumn } from 'quasar'; // CORREÇÃO: Usando 'import type'
import { api } from 'boot/axios';

// ... resto do script, que já estava correto ...
// --- Interfaces de Tipagem ---
interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface Role {
  id: string;
  name: string;
  description: string;
}
// --- Fim das Interfaces ---

const $q = useQuasar();

// Obtém a instância do Keycloak de forma segura
// const instance = getCurrentInstance();
// const keycloak = instance?.appContext.config.globalProperties.$keycloak;

// --- Estado com Tipagem ---
const users = ref<User[]>([]);
const allAvailableRoles = ref<Role[]>([]);
const loading = ref<boolean>(true);

const dialogVisible = ref<boolean>(false);
const selectedUser = ref<User | null>(null);
const selectedUserRoles = ref<string[]>([]); // Array de IDs (strings)

const columns: QTableColumn[] = [
  { name: 'username', label: 'Username', field: 'username', align: 'left', sortable: true },
  { name: 'email', label: 'Email', field: 'email', align: 'left', sortable: true },
  { name: 'actions', label: 'Ações', field: 'actions', align: 'center' }
];
// --- Fim do Estado ---

async function fetchUsers(): Promise<void> {
  try {
    const response = await api.get<User[]>('/admin/users');
    users.value = response.data;
  } catch (error) {
    console.error(error);
    $q.notify({ color: 'negative', message: 'Falha ao carregar usuários.' });
  }
}

async function fetchAllRoles(): Promise<void> {
  try {
    const response = await api.get<Role[]>('/admin/users/roles');
    allAvailableRoles.value = response.data;
  } catch (error) {
    console.error(error);
    $q.notify({ color: 'negative', message: 'Falha ao carregar permissões.' });
  }
}

async function openPermissionsDialog(user: User): Promise<void> {
  selectedUser.value = user;
  try {
    // CORREÇÃO da resposta anterior: o prefixo /api aqui estava sobrando.
    const response = await api.get<Role[]>(`/admin/users/${user.id}/roles`);
    selectedUserRoles.value = response.data.map(role => role.id);
    dialogVisible.value = true;
  } catch (error) {
    console.error(error);
    $q.notify({ color: 'negative', message: 'Falha ao carregar permissões do usuário.' });
  }
}

async function savePermissions(): Promise<void> {
  if (!selectedUser.value) return;

  const rolesToUpdate: Role[] = allAvailableRoles.value.filter(role =>
    selectedUserRoles.value.includes(role.id)
  );

  try {
    // CORREÇÃO da resposta anterior: o prefixo /api aqui estava sobrando.
    await api.post(`/admin/users/${selectedUser.value.id}/roles`, rolesToUpdate);
    $q.notify({ color: 'positive', message: 'Permissões atualizadas com sucesso!' });
    dialogVisible.value = false;
  } catch (error) {
    console.error(error);
    $q.notify({ color: 'negative', message: 'Falha ao salvar permissões.' });
  }
}

onMounted(async () => {
  loading.value = true;
  await Promise.all([fetchUsers(), fetchAllRoles()]);
  loading.value = false;
});
</script>