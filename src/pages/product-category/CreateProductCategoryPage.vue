<template>
  <!-- Usando q-pa-md em telas pequenas e q-pa-lg em maiores para melhor espaçamento -->
  <q-page class="q-pa-md q-pa-lg-lg">

    <!-- Cabeçalho da Página -->
    <div class="row items-center justify-between q-mb-md q-gutter-md">
      <div class="col-12 col-md-auto">
        <div class="text-h4 text-weight-medium">Gerenciamento de Categorias</div>
        <div class="text-subtitle1 text-grey-7">Adicione, edite e organize as categorias de produtos.</div>
      </div>
      <div class="col-12 col-md-auto">
        <!-- O botão ocupa a largura total em telas pequenas (xs) -->
        <q-btn
          @click="openCreateDialog"
          color="primary"
          icon="add"
          label="Criar Categoria"
          unelevated
          class="full-width-xs"
        />
      </div>
    </div>

    <!-- Tabela de Dados -->
    <q-card flat bordered class="q-mt-lg">
      <!-- A tabela agora é responsiva com 'grid' em telas pequenas -->
      <q-table
        :rows="categories"
        :columns="columns"
        row-key="id"
        :filter="filter"
        flat
        :loading="loading"
        :grid="$q.screen.lt.md"
        card-container-class="q-col-gutter-md"
      >
        <!-- Barra de pesquisa no canto superior direito -->
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Pesquisar...">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

        <!-- Célula customizada para a tabela (layout de lista) -->
        <template v-slot:body-cell-image="props">
          <q-td :props="props">
            <q-avatar size="48px" font-size="24px" color="grey-2" text-color="grey-6" :icon="props.row.imageUrl ? undefined : 'category'">
              <img v-if="props.row.imageUrl" :src="props.row.imageUrl" alt="Imagem da Categoria" style="object-fit: cover;">
            </q-avatar>
          </q-td>
        </template>

        <template v-slot:body-cell-status="props">
          <q-td :props="props">
            <q-chip
              :color="props.row.active ? 'green-2' : 'red-2'"
              :text-color="props.row.active ? 'green-8' : 'red-8'"
              :icon="props.row.active ? 'check_circle' : 'cancel'"
              size="sm"
              class="text-weight-bold"
            >
              {{ props.row.active ? 'Ativa' : 'Inativa' }}
            </q-chip>
          </q-td>
        </template>

        <template v-slot:body-cell-actions="props">
          <q-td :props="props" class="q-gutter-sm">
            <q-btn flat dense round icon="edit" color="info" @click="openEditDialog(props.row)" />
            <q-btn flat dense round icon="delete" color="negative" @click="confirmDelete(props.row)" />
          </q-td>
        </template>

        <!-- Card customizado para a visualização em grid (telas pequenas) -->
        <template v-slot:item="props">
          <div class="col-12 q-mb-md">
            <q-card flat bordered>
              <q-card-section class="row items-center q-gutter-md">
                <q-avatar size="60px" font-size="30px" color="grey-2" text-color="grey-6" :icon="props.row.imageUrl ? undefined : 'category'">
                  <img v-if="props.row.imageUrl" :src="props.row.imageUrl" alt="Imagem da Categoria" style="object-fit: cover;">
                </q-avatar>
                <div class="col">
                  <div class="text-h6">{{ props.row.name }}</div>
                  <div class="text-caption text-grey-7 ellipsis">{{ props.row.description }}</div>
                </div>
              </q-card-section>
              <q-separator />
              <q-card-actions class="row justify-between items-center">
                <q-chip
                  :color="props.row.active ? 'green-2' : 'red-2'"
                  :text-color="props.row.active ? 'green-8' : 'red-8'"
                  :icon="props.row.active ? 'check_circle' : 'cancel'"
                  size="sm"
                  class="text-weight-bold"
                >
                  {{ props.row.active ? 'Ativa' : 'Inativa' }}
                </q-chip>
                <div class="q-gutter-sm">
                  <q-btn flat dense round icon="edit" color="info" @click="openEditDialog(props.row)" />
                  <q-btn flat dense round icon="delete" color="negative" @click="confirmDelete(props.row)" />
                </div>
              </q-card-actions>
            </q-card>
          </div>
        </template>

        <!-- Mensagem para quando não há dados -->
        <template v-slot:no-data>
           <div class="full-width row flex-center text-grey-7 q-gutter-sm q-py-lg">
            <q-icon size="2em" name="sentiment_dissatisfied" />
            <span>Nenhuma categoria encontrada.</span>
          </div>
        </template>
      </q-table>
    </q-card>

    <!-- Diálogo de Criar/Editar (já é responsivo por padrão) -->
    <q-dialog v-model="showCreateEditDialog" persistent>
      <q-card style="min-width: 320px; width: 100%; max-width: 500px;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ isEditMode ? 'Editar Categoria' : 'Nova Categoria' }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-form @submit.prevent="onSave">
          <q-card-section class="q-pt-md q-gutter-md">
              <q-input
                filled
                v-model="editedCategory.name"
                label="Nome da Categoria *"
                lazy-rules
                :rules="[val => val && val.length > 0 || 'O nome é obrigatório']"
              />
              <q-input
                filled
                v-model="editedCategory.imageUrl"
                label="URL da Imagem"
                hint="Cole o link para a imagem da categoria"
              />
              <q-input
                filled
                v-model="editedCategory.description"
                label="Descrição"
                type="textarea"
                autogrow
              />
              <q-toggle
                v-model="editedCategory.active"
                :label="editedCategory.active ? 'Categoria Ativa' : 'Categoria Inativa'"
                left-label
              />
          </q-card-section>
          <q-card-actions align="right" class="q-pa-md">
            <q-btn label="Cancelar" color="grey" flat v-close-popup />
            <q-btn :label="isEditMode ? 'Salvar Alterações' : 'Criar'" type="submit" color="primary" unelevated :loading="loading" />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from 'vue';
import { useQuasar, type QTableColumn } from 'quasar';
// O boot file do axios já exporta a instância configurada com o interceptor
import { api, isAxiosError } from 'src/boot/axios';

// --- INTERFACES E TIPOS ---
interface Category {
  id: number;
  name: string;
  description: string;
  active: boolean;
  imageUrl?: string;
}

// --- SETUP INICIAL ---
const $q = useQuasar();
const instance = getCurrentInstance();
const keycloak = instance?.proxy?.$keycloak;

// --- ESTADOS REATIVOS ---
const loading = ref(false);
const filter = ref('');
const categories = ref<Category[]>([]);
const showCreateEditDialog = ref(false);
const isEditMode = ref(false);

const defaultCategory: Omit<Category, 'id'> = {
  name: '',
  description: '',
  active: true,
  imageUrl: ''
};
const editedCategory = ref<Category | Omit<Category, 'id'>>({ ...defaultCategory });

// --- DEFINIÇÃO DAS COLUNAS DA TABELA ---
const columns: QTableColumn[] = [
  { name: 'image', label: 'Imagem', align: 'left', field: 'imageUrl' },
  { name: 'name', required: true, label: 'Nome da Categoria', align: 'left', field: 'name', sortable: true },
  { name: 'description', label: 'Descrição', align: 'left', field: 'description' },
  { name: 'status', label: 'Status', align: 'center', field: 'active', sortable: true },
  { name: 'actions', label: 'Ações', align: 'right', field: 'id' },
];

// --- FUNÇÕES DE API (CRUD) ---

const fetchCategories = async () => {
  loading.value = true;
  try {
    // A instância 'api' já tem o interceptor que adiciona o token
    const response = await api.get('/categories');
    categories.value = response.data;
  } catch (error: unknown) {
    console.error('Erro ao buscar categorias:', error);
    $q.notify({
      color: 'negative',
      icon: 'error',
      message: 'Falha ao carregar as categorias.'
    });
  } finally {
    loading.value = false;
  }
};

const onSave = async () => {
  loading.value = true;
  try {
    if (isEditMode.value) {
      const categoryToUpdate = editedCategory.value as Category;
      await api.put(`/categories/${categoryToUpdate.id}`, categoryToUpdate);
    } else {
      await api.post('/categories', editedCategory.value);
    }
    
    $q.notify({
      color: 'positive',
      icon: 'check_circle',
      message: `Categoria ${isEditMode.value ? 'atualizada' : 'criada'} com sucesso!`
    });
    
    showCreateEditDialog.value = false;
    void fetchCategories(); // Recarrega a lista

  } catch (error: unknown) {
    console.error('Erro ao salvar categoria:', error);
    let errorMessage = 'Ocorreu um erro desconhecido.';
    // Tratamento de erro específico do Axios para pegar a mensagem do backend
    if (isAxiosError(error) && error.response?.data?.message) {
      errorMessage = error.response.data.message;
    }
    $q.notify({
      color: 'negative',
      icon: 'error',
      message: `Falha ao salvar: ${errorMessage}`
    });
  } finally {
    loading.value = false;
  }
};

const deleteCategory = async (id: number) => {
  loading.value = true;
  try {
    await api.delete(`/categories/${id}`);
    $q.notify({
      color: 'positive',
      icon: 'check_circle',
      message: 'Categoria excluída com sucesso!',
    });
    void fetchCategories(); // Recarrega a lista
  } catch (error: unknown) {
    console.error('Erro ao deletar categoria:', error);
    $q.notify({
      color: 'negative',
      icon: 'error',
      message: 'Falha ao excluir a categoria.'
    });
  } finally {
    loading.value = false;
  }
}

const confirmDelete = (category: Category) => {
  $q.dialog({
    title: 'Confirmar Exclusão',
    message: `Você tem certeza que deseja excluir a categoria "<strong>${category.name}</strong>"?`,
    html: true, // Permite usar tags HTML na mensagem
    cancel: { label: 'Cancelar', color: 'grey', flat: true },
    ok: { label: 'Excluir', color: 'negative', unelevated: true },
    persistent: true,
  }).onOk(() => {
    void deleteCategory(category.id);
  });
};

// --- FUNÇÕES DE CONTROLE DO DIÁLOGO ---
const openCreateDialog = () => {
  isEditMode.value = false;
  editedCategory.value = { ...defaultCategory };
  showCreateEditDialog.value = true;
};

const openEditDialog = (category: Category) => {
  isEditMode.value = true;
  editedCategory.value = { ...category };
  showCreateEditDialog.value = true;
};

// --- HOOK DO CICLO DE VIDA ---
onMounted(() => {
  if (keycloak?.authenticated) {
    void fetchCategories();
  } else {
    $q.notify({ color: 'warning', message: 'Autenticação necessária para ver as categorias.' });
    // Opcional: redirecionar para o login se não estiver autenticado
    // keycloak?.login();
  }
});

</script>

<style lang="scss" scoped>
// Estilo para o botão ocupar 100% da largura em telas 'xs'
.full-width-xs {
  @media (max-width: $breakpoint-xs-max) {
    width: 100%;
  }
}
</style>
